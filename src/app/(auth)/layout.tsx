interface LayoutAuthRootProps {
  children: React.ReactNode;
}

const LayoutAuthRoot = ({ children }: LayoutAuthRootProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {children}
    </div>
  );
}

export default LayoutAuthRoot;