import Snowfall from "react-snowfall"


export const SnowEffect = () => {
  return (
    <Snowfall
      snowflakeCount={20}
      speed={[0.1, 0.5]}
    />
  )
}
