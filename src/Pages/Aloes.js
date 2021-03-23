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
  return (
    <>
      <h1>{name}</h1>
      <p>{firstShortInfo}</p>
      <p>{secondShortInfo}</p>
      <ul>
        <li>Oświetlenie - {lighting}</li>
        <li>Temperatura - {temperature}</li>
        <li>Podlewanie - {watering}</li>
        <li>Ziemia - {flowerSoil}</li>
        <li>Nawóz - {fertilizer}</li>
        <li>Wilgotność powietrza - {air}</li>
      </ul>
    </>
  );
};

export default Aloes;
