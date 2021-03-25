import "../style/Pages.css";
import picture from "../Pictures/Normal/Szczepiony.jpg";
import API from "../data.json";

const Szczepiony = () => {
  const { name, firstShortInfo, secondShortInfo } = API.kaktusy.szczepiony;
  const {
    lighting,
    temperature,
    watering,
    flowerSoil,
    fertilizer,
    air,
  } = API.kaktusy.szczepiony.data;
  const { one, two, three, four } = API.kaktusy.szczepiony.curiosities;
  return (
    <div className="pages">
      <h1>{name}</h1>
      <p>{firstShortInfo}</p>
      <p>{secondShortInfo}</p>
      <img src={picture} alt="" />
      <h3>Informacje</h3>
      <ul>
        {lighting && <li>Oświetlenie - {lighting}</li>}
        {temperature && <li>Temperatura - {temperature}</li>}
        {watering && <li>Podlewanie - {watering}</li>}
        {flowerSoil && <li>Ziemia - {flowerSoil}</li>}
        {fertilizer && <li>Nawóz - {fertilizer}</li>}
        {air && <li>Wilgotność powietrza - {air}</li>}
      </ul>
      <h3>Ciekawostki</h3>
      <ul>
        <li>{one}</li>
        <li>{two}</li>
        <li>{three}</li>
        <li>{four}</li>
      </ul>
    </div>
  );
};

export default Szczepiony;
