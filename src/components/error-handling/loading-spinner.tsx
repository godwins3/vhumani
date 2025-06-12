interface LoadingSpinnerProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export const LoadingSpinner = ({ message = "Loading...", size = "md" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };
  
  return (
    <div className="flex h-full flex-col items-center justify-center p-8">
      <div className={`border-primary animate-spin rounded-full border-4 border-t-transparent ${sizeClasses[size]}`}></div>
      <p className="mt-4 text-sm text-gray-500">{message}</p>
    </div>
  );
};
