import RMain from "@/src/components/example/restaurant/main"
import SectionListBasic from "@/src/components/example/section.list.basic"
import SectionListLibrary from "@/src/components/example/section.list.library"
import SectionListScroll from "@/src/components/example/section.list.scroll"
import { getBookByIdAPI } from "@/src/utils/api"
import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { Dimensions, Text, View } from "react-native"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
const { height: sHeight, width: sWidth } = Dimensions.get('window');


const ProductPage = () => {
    const { id } = useLocalSearchParams();
    const [book, setBook] = useState<IBook>();
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchBook = async () => {
            setLoading(true);
            const res = await getBookByIdAPI(id as string);
            if (res.data) {
                setBook(res.data);
            }
            setLoading(false);

        }
        fetchBook();
    }, [id])
    return (

        <View style={{ flex: 1 }}>
            {
                loading == false ?
                    <RMain book={book} />
                    :


                    <ContentLoader
                        speed={2}
                        width={700}
                        height={sHeight}
                        // viewBox="0 0 700 150"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        style={{ width: '100%' }}
                    >
                        <Rect x="0" y="0" rx="3" ry="3" width={sWidth} height="120" />
                        <Rect x="10" y="140" rx="10" ry="10" width={sWidth - 50} height="20" />
                        <Rect x="10" y="170" rx="10" ry="10" width={sWidth - 150} height="20" />
                        <Rect x="10" y="220" rx="5" ry="5" width={100} height="100" />
                        <Rect x="130" y="220" rx="10" ry="10" width={150} height="20" />
                        <Rect x="130" y="250" rx="10" ry="10" width={100} height="20" />
                        <Rect x="130" y="280" rx="10" ry="10" width={200} height="20" />
                        <Rect x="10" y="340" rx="5" ry="5" width={100} height="100" />
                        <Rect x="130" y="340" rx="10" ry="10" width={150} height="20" />
                        <Rect x="130" y="370" rx="10" ry="10" width={100} height="20" />
                        <Rect x="130" y="400" rx="10" ry="10" width={200} height="20" />
                        <Rect x="10" y="460" rx="5" ry="5" width={100} height="100" />
                        <Rect x="130" y="460" rx="10" ry="10" width={150} height="20" />
                        <Rect x="130" y="490" rx="10" ry="10" width={100} height="20" />
                        <Rect x="130" y="520" rx="10" ry="10" width={200} height="20" />
                        <Rect x="10" y="580" rx="5" ry="5" width={100} height="100" />
                        <Rect x="130" y="580" rx="10" ry="10" width={150} height="20" />
                        <Rect x="130" y="610" rx="10" ry="10" width={100} height="20" />
                        <Rect x="130" y="640" rx="10" ry="10" width={200} height="20" />
                        <Rect x="10" y="700" rx="5" ry="5" width={100} height="100" />
                        <Rect x="130" y="700" rx="10" ry="10" width={150} height="20" />
                        <Rect x="130" y="730" rx="10" ry="10" width={100} height="20" />
                        <Rect x="130" y="760" rx="10" ry="10" width={200} height="20" />
                    </ContentLoader>


            }


        </View>
    )
}

export default ProductPage