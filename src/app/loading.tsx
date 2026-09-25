

const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#000000]">
      
      <div className="flex flex-col items-center gap-4">

        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#232732] border-t-[#C2F800]"></div>
        
        <p className="text-sm font-bold uppercase tracking-widest text-[#8A92A0]">
          
          Loading...
        </p>
      </div>
    </div>
  );
};

export default loading;
