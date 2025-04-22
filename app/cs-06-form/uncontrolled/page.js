'use client'

import React, { useState, useEffect } from 'react'
import LoginCC from './_component/login-cc'
import LoginUc from './_component/login-uc'

export default function UncontrolledPage(props) {
  return (
    <>
      <h1>控制與不可控</h1>
      <LoginCC />
      <LoginUc />
    </>
  )
}
