

const Home=()=>{

    const [intialData,setInitialData] = useState()

    useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
               setInitialData(res.data)
         })
    },[])

    let filterData=

    
    return(<>
       <div className="container">
        <div className="row">
          <input type="text" placeholder="Search Any Name"/>
          </div>

          <div className="row">
                 {intialData.map((item,index)=>{
                             return(<>
                               <div class="card">
                                      <p>Name: {item.name}</p>
                                      <p>Email : {item.email}</p>
                                      <p>Company Name : {item.company.name}</p>
                               </div>
                             </>)
                 })}
          </div>
        </div>
    </>)

}