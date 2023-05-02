import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"
import Oven from "./Oven"
import Sink from "./Sink"


const FloorPlan = () => {
  return (
    <>
    <div>
    <Bedroom bedNum="1" />
    <Kitchen />
    <LivingRoom />
    <Bedroom bedNum="2" />
    <Bath size="Full" />
    <Bedroom bedNum="3" />
    <Bath size="Half" />
    </div>
    </>
  )
}

export default FloorPlan