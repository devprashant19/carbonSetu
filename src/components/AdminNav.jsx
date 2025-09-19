
const AdminNav = () => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="w-full px-16">
        <div className="flex items-center justify-between h-24 w-full">
          <span className="font-bold text-2xl text-green-600">CarbonSetu</span>
          <div className="flex-1 flex justify-end">
            <div className="flex space-x-12">
              <a href="#" className="text-green-500 hover:text-green-600 px-6 py-2 rounded-xl text-xl font-medium">Dashboard</a>
              <a href="#" className="text-green-500 hover:text-green-600 px-6 py-2 rounded-xl text-xl font-medium">Accounts</a>
              <a href="#" className="text-green-500 hover:text-green-600 px-6 py-2 rounded-xl text-xl font-medium">Projects</a>
              <a href="#" className="text-green-500 hover:text-green-600 px-6 py-2 rounded-xl text-xl font-medium">Credit Issuance</a>
              <a href="#" className="text-green-500 hover:text-green-600 px-6 py-2 rounded-xl text-xl font-medium">Logs</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default AdminNav;