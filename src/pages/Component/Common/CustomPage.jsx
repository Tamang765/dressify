import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import Cards from "../Card";
import { useDispatch } from "react-redux";
import { addFab } from "../../../app/AddIdSlice";
import { add } from "../../../app/CartSlice";
import "./CustomPage.scss"
function CustomPage({ data }) {
  const [activePage, setActivePage] = useState(1);
  const [active, setActive] = useState(Array(data.length).fill(false));
  const [displayData, setDisplayData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const setManCat = (page) => {
    setActivePage(page);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = data.slice(startIndex, endIndex);
    setDisplayData(displayedData);
  };
  const itemsPerPage = 12;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  useEffect(() => {
    // Fetch or load the data when the component mounts
    // Replace the API call or data retrieval logic below with your actual implementation
    const fetchData = async () => {
      setIsLoading(true);
      // Simulating an API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update the display data
      const startIndex = (activePage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const displayedData = data.slice(startIndex, endIndex);

      setDisplayData(displayedData);
      setIsLoading(false);
    };

    fetchData();
  }, [activePage, data]);

  const changer = (item) => {
    const newActive = [...active];
    newActive[item.id] = !newActive[item.id];
    setActive(newActive);
    dispatch(addFab(item));
  };
  const handleAddCart = (item) => {
    dispatch(add(item));
  };
  return (
    <div className="d-flex justify-content-center flex-column w-100 custompage">
      {isLoading ? (
        <div className="d-flex justify-content-center w-100">Loading....</div>
      ) : (
        <div className="alldata"
          style={{
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {displayData.length > 0 ? (
            <>
              {displayData?.map((item, index) => (
                <Cards
                  key={index + 1}
                  id={item.id}
                  data={data}
                  item={item}
                  changer={changer}
                  active={active}
                  index={index}
                  handleClick={handleAddCart}
                />
              ))}{" "}
            </>
          ) : (
            <div className=" text-black ">No results to show!!</div>
          )}
        </div>
      )}
      <br />
      <br />
      <Pagination className="d-flex justify-content-center mt-4">
        <Pagination.First
          onClick={() => setManCat(1)}
          disabled={activePage === 1}
        />
        <Pagination.Prev
          onClick={() => setManCat(activePage - 1)}
          disabled={activePage === 1}
        />
        {pageNumbers.map((page) => (
          <Pagination.Item
            key={page}
            active={page === activePage}
            onClick={() => setManCat(page)}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setManCat(activePage + 1)}
          disabled={activePage === totalPages}
        />
        <Pagination.Last
          onClick={() => setManCat(totalPages)}
          disabled={activePage === totalPages}
        />
      </Pagination>
    </div>
  );
}

export default CustomPage;
