
const LoadingSpinner = () => {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#23BE0A]"></div>
      </div>
    );
};

export default LoadingSpinner;