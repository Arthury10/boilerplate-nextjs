interface LayoutPrivateRootProps {
  children: React.ReactNode;
}

const LayoutPrivateRoot = ({ children }: LayoutPrivateRootProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {children}
    </div>
  );
}

export default LayoutPrivateRoot;