import React from "react";

function Items() {
  return (
    <div
      style={{
        margin: "110px",
        marginTop: "100",
        marginBottom: "100",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Righteous",
      }}
    >
      <div>
        <h1
          style={{
            width: "25px",
            height: "50px",
            color: "#fece2f",
            WebkitTextStrokeColor: "rgba(255,255,0,0.5)",
            WebkitTextStrokeWidth: "2.5px",
          }}
        >
          {" "}
          <i className="fas fa-search fa-2x"></i>
        </h1>
        <span style={{ color: "blue" }}>Nenhum item encontrado.</span>
      </div>
    </div>
  );
}

export default Items;
