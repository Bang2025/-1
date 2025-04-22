'use client'

import MyInput from './_components/my-input'
import MyTextarea from './_components/my-textarea'
import MySelect from './_components/my-select'
import MyRadioButtons from './_components/my-radio-buttons'
import MyCheckboxes from './_components/my-checkboxes'
import MyCheckboxesStringArray from './_components/my-checkboxes-string-array'

export default function ControlledPage() {
  return (
    <>
      <h1>可控表單元件(controlled)</h1>
      <hr />
      {/* <MyInput /> */}
      {/* <MyTextarea /> */}
      {/* <MySelect /> */}
      {/* <MyRadioButtons /> */}
      {/* <MyCheckboxes /> */}
      <MyCheckboxesStringArray />
    </>
  )
}
