import useAuth from "../hooks/useAuth";

const MyInfo = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="p-5 border rounded  text-white max-w-sm bg-slate-800">
        <img src={user?.photoURL || "/public/placeholder.jpg"} />
        <div className="text-sm mt-5">
          <h1>
            <span className=" font-bold">User Name:</span>{" "}
            {user?.displayName || "Not available"}
          </h1>
          <p>
            <spa className="font-bold">Email:</spa> {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
