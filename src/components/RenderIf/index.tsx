/* eslint-disable @typescript-eslint/no-explicit-any */
interface RenderIfProps {
  condition?: any;
  children: React.ReactNode;
}

const RenderIf = ({ condition, children }: RenderIfProps) => {

  return !!condition && children
}

export default RenderIf;