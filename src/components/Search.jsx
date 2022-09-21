import React from "react";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Найти пользователя" />
      </div>
      <span>Пользователь не найден!</span>

      <div className="userChat">
        <img src="" alt="" />
        <div className="userChatInfo">
          <span>Хаз</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
