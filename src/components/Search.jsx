import React from "react";

function Search(props) {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Найти пользователя" />
      </div>
      <span>Пользователь не найден!</span>

      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxl2Nf4fQtL3CxjKLKmZ4DfCKs-qPKONdXdOll4uSwg&s" alt="" />
        <div className="userChatInfo">
          <span>Хаз</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
