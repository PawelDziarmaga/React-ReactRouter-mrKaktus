import "../style/Pages.css";
import picture from "../Pictures/Normal/Aloes.jpg";
import API from "../data.json";

const Aloes = () => {
  const { name, firstShortInfo, secondShortInfo } = API.sukulenty.aloes;
  const {
    lighting,
    temperature,
    watering,
    flowerSoil,
    fertilizer,
    air,
  } = API.sukulenty.aloes.data;
  const { one, two, three, four } = API.sukulenty.aloes.curiosities;
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

export default Aloes;
