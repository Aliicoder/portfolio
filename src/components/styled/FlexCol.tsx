import { PropsWithChildren } from 'react'
interface IFlexCol extends PropsWithChildren {
  className: string
}
function FlexCol({className,children}:IFlexCol) {
  return (
    <div className={` ${className} flex flex-col`}>
      {children}
    </div>
  )
}

export default FlexCol