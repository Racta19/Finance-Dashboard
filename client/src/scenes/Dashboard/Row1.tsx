import DashBox from '@/components/DashBox'
import { useGetKpisQuery } from '@/state/api'

const Row1 = () => {
    const { data } = useGetKpisQuery();
  return (
    <>
        <DashBox gridArea="a" ></DashBox>
        <DashBox gridArea="b" ></DashBox>
        <DashBox gridArea="c" ></DashBox>
    </>
  )
}

export default Row1