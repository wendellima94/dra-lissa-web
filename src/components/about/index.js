import React from "react";
import "./style.css";

export default function About() {
  return (
    <main className="aboutContainer">
      <section className="wrapperContentImg">
        <img
          className="img-card"
          src="https://live.staticflickr.com/65535/52043285523_37db367f6a_o.jpg"
          alt="mulher ioga"
        />
      </section>
      <section className="wrapperContentText">
        <div className="titleWrapper">
          <br />
          <br />
          <h2>Melhor desempenho</h2>
        </div>
        <div className="TextContainer">
          <span>
            <b> Anamnese:</b> questionário de anamnese para avaliação de
            hábitos, horários, restrições e preferências alimentares, entre
            outros fatores.
          </span>
          <br />
          <span>
            <b>Consulta: </b> avaliação de resultados de exames laboratoriais,
            exame de bioimpedância e análise de práticas e costumes alimentares.{" "}
          </span>
          <br />
          <span>
            <b>Plano nutricional: </b> elaboramos o plano nutricional de acordo
            com as necessidades do paciente em até uma semana após a consulta.
          </span>
          <br />
        </div>
      </section>
    </main>
  );
}
