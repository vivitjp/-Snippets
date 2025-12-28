import React from "react"

const MyBtn = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<'button'>
>(
  (props, ref) => <button ref={ref} {...props} />
)

MyBtn.displayName = 'MyBtn'