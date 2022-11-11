/* eslint-disable prettier/prettier */
import dynamic from 'next/dynamic'

const CanvasComponent = dynamic(
  () => {
    return import('./Canvas')
  },
  { ssr: false }
)

export default CanvasComponent
