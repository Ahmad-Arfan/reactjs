import React, { useState, useEffect } from "react";
import "./style.css";
import ReactPaginate from "react-paginate";

import Users from "./components/Users";
import Loading from "./components/Loader";

function Post() {
  const [posts, setPosts] = useState([]);
  const [perPage, setPerPage] = useState();
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(true);
  console.log(loading);

  useEffect(() => {
    console.log(loading);
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((result) => {
        setPosts([...result.data]);
        setPageCount(result.total_pages);
        setPerPage(result.per_page);
        setLoading(false);
        console.log(loading);
      })
      .catch((error) => console.error("Error", error));

    setLoading(true);
    console.log(loading);
  }, []);

  const fetchData = (currentPage) => {
    console.log(loading);
    fetch(`https://reqres.in/api/users?page=${currentPage}`)
      .then((response) => response.json())
      .then((result) => {
        setPosts([...result.data]);
        setLoading(false);
        console.log(loading);
      });

    setLoading(true);
    console.log(loading);
  };
  const handlePageClick = (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const dataFromApi = fetchData(currentPage);

    setPosts(dataFromApi);
  };

  return (
    <div className="App">
      {!loading ? (
        <ul>
          <Users posts={posts} />
        </ul>
      ) : (
        <Loading loading={loading} />
      )}

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

// class Post extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       offset: 0,
//       data: [],
//       perPage: 6,
//       currentPage: 0,
//     };
//     this.handlePageClick = this.handlePageClick.bind(this);
//   }

//   receivedData() {
//     axios.get("https://reqres.in/api/users").then((res) => {
//       console.log(res.data);
//       const data = res.data.data;
//       const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
//       const postData = slice.map((pd, id) => (
//         <Card className="Card" key={id}>
//           <Card.Img variant="top" src={pd.avatar} />
//           <Card.Body>
//             <Card.Text>{pd.email}</Card.Text>
//             <Card.Text>{pd.first_name}</Card.Text>
//           </Card.Body>
//         </Card>
//       ));

//       this.setState({
//         pageCount: Math.ceil(data.length / this.state.perPage),

//         postData,
//       });
//     });
//   }
//   handlePageClick = (e) => {
//     const selectedPage = e.selected;
//     const offset = selectedPage * this.state.perPage;

//     this.setState(
//       {
//         currentPage: selectedPage,
//         offset: offset,
//       },
//       () => {
//         this.receivedData();
//       }
//     );
//   };

//   componentDidMount() {
//     this.receivedData();
//   }
//   render() {
//     return (
//       <div className="App">
//         {this.state.postData}
//         <ReactPaginate
//           previousLabel={"⟨"}
//           nextLabel={"⟩"}
//           breakLabel={"..."}
//           breakClassName={"break-me"}
//           pageCount={this.state.pageCount}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={5}
//           onPageChange={this.handlePageClick}
//           containerClassName={"pagination"}
//           activeClassName={"active"}
//         />
//       </div>
//     );
//   }
// }

export default Post;
