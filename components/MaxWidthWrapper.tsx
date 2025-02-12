
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <div
      className = 'mx-auto w-full px-2.5 md:px-20'>
      {children}
    </div>
  )
}

export default MaxWidthWrapper