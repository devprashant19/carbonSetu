
const HomeNav = () => {
  return (
    <nav className="bg-gray-100 shadow-md w-full top-0 left-0">
      <div className="w-full px-16">
        <div className="flex items-center justify-between h-20 w-full">
          <span className="font-bold text-2xl text-green-600">CarbonSetu</span>
          <div className="flex-1 flex justify-end">
            <div className="flex space-x-12">
              <a href="#" className="text-green-500 hover:text-green-600 px-6 py-2 rounded-xl text-xl font-medium">View Registry</a>
              <a href="/login" className="text-green-500 hover:text-green-600 px-6 py-2 rounded-xl text-xl font-medium">Login</a>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default HomeNav;