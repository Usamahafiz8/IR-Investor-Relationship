"use client"
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

// import  { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }:any) {
  return(

  //  <NextThemesProvider {...props}>

  //   {children}
  //   </NextThemesProvider>
  <div>
  <ProgressBar height='4px' color="#fafafa" options={{ showSpinner: false }} shallowRouting />
  {children}
</div>
  )
}