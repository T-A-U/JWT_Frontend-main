import React, {useState, useEffect} from 'react'

const CreateGame = () => {
    const [newGame, setNewGame] = useState({
        name: "",
        agerating: "",
        price: "",
        description: ""

    });
    useEffect(() => {
        pushToDB();
    }, []);

    //   const fetchGames = async () => {
    //     const response = await fetch("http://localhost:5000/");
    //     const data = await response.json();
    //     setGames(data);
    //   };
    const pushToDB = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({newGame})
        }
        
        );
        setNewGame({})
    }
  return (
    <form>
    <div className="space-y-12 text-left " >
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900 mt-10">Add A Game to the Store</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Game Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
               
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Super Smash Brothers Melee"
                  onChange={(e) => setNewGame({...newGame, name: e.target.value})}
                  value={newGame.name}
                />
                
              </div>
            </div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Age Rating
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
             
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="E for Everyone"
                  onChange={(e) => setNewGame({...newGame, agerating: e.target.value})}
                  value={newGame.agerating}
                />
                
              </div>
            </div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Price (USD)
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
               
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="$40"
                  onChange={(e) => setNewGame({...newGame, price: e.target.value})}
                  value={newGame.price}
                />
                
              </div>
            </div>
          </div>
          

          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                onChange={(e) => setNewGame({...newGame, description: e.target.value})}
                value={newGame.description}
              />
            </div>
            <button onClick={pushToDB}>Submit</button>
          </div>
   </div>
   </div>
   </div>
   </form>

  )
}

export default CreateGame

 {/* <form>
        <title>Add a Game to the Store</title>
        <input placeholder="Game Name">
        </input>
        <input placeholder="Age Rating"></input>
        <input placeholder="Price (USD)"></input>
        <input placeholder="Description"></input>
    </form> */}