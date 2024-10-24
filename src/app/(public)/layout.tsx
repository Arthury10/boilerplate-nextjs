interface LayoutPublicRootProps {
  children: React.ReactNode;
}

const LayoutPublicRoot = ({ children }: LayoutPublicRootProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {children}
    </div>
  );
}

export default LayoutPublicRoot;