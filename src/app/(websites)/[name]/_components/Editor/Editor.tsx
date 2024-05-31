"use client"

import React, { useContext, useEffect, useState } from 'react';
import { Modal, Spin, message} from 'antd';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { markdownToDraft, draftToMarkdown } from 'markdown-draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';


const TextEditorModal  = ({ visible, onClose, initialMarkdown }:any) => {
  const {websiteInfo,updateWebsiteinfo } = useContext(
    AppContext,
  ) as AppContextType;
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const rawContentState = markdownToDraft(initialMarkdown); // Convert Markdown to Draft.js RawDraftContentState
    const contentState = convertFromRaw(rawContentState); // Convert RawDraftContentState to ContentState
    setEditorState(EditorState.createWithContent(contentState));
  }, [initialMarkdown]);

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  // const handleSubmit = () => {
  //   const rawContentState = convertToRaw(editorState.getCurrentContent());
  //   const markdown = draftToMarkdown(rawContentState);
  //   onSubmit(markdown);
  // };

  const onFinish = async (values: any) => {
    setLoading(true);
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markdown = draftToMarkdown(rawContentState);
   
    let info = {
      content: markdown,
      id: websiteInfo?.id,
    };
    const apiResponse = await fetch(`/api/update-website`, {
      method: "POST",
      body: JSON.stringify(info),
    });
    
    const reslut = await apiResponse?.json();

    if (reslut?.status === 200) {
      updateWebsiteinfo(reslut?.updateResponse?.data);
      setLoading(false);
      message.success("updated content successfully");
      onClose();
    } else {
      setLoading(false);
      return message.error("Error while updating content");
    }
  };

  return (
    <Modal
      title="Edit Content"
      open={visible}
      onCancel={onClose}
      destroyOnClose={true}
      footer={
        <div className='flex items-center justify-end gap-3 w-full'>
          
        <button disabled={loading} className='border border-gray-600 hover:bg-black hover:text-white px-3 py-1 rounded-md' key="back" onClick={onClose}>
          Cancel
        </button>
         
          <Spin spinning={loading}>
        <button disabled={loading} className='border border-gray-600 hover:bg-black hover:text-white px-3 py-1 rounded-md' key="submit" onClick={onFinish}>
          Submit
        </button>
        
          </Spin>
        </div>
      }
      width={800}
    >
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
      />
    </Modal>
  );
};

export default TextEditorModal;
