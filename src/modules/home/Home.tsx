import React, {useEffect, useCallback} from "react"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native"
import {useLocalStore} from "mobx-react"
import HomeStore from "./HomeStore"
import {observer} from "mobx-react"
import FlowList from "../../components/flowlist/FlowList.js"
import CategoryList from "./components/CategoryList"
import TitleBar from "./components/TitleBar"
import Heart from "../../components/Heart"
import ResizeImage from "../../components/ResizeImage"

import {useNavigation} from "@react-navigation/native"
import {StackNavigationProp} from "@react-navigation/stack"

const {width: SCREEN_WIDTH} = Dimensions.get("window")

export default observer(() => {

    const store = useLocalStore(() => new HomeStore())

    const navigation = useNavigation<StackNavigationProp<any>>()

    useEffect(() => {
        store.requestHomeList()
        store.getCategoryList()
    }, [])

    const refreshNewData = () => {
        store.resetPage()
        store.requestHomeList()
    }

    const loadMoreData = () => {
        store.requestHomeList()
    }

    const onArticlePress = useCallback((article: ArticleSimple) => () => {
        navigation.push("ArticleDetail", {id: article.id})
    }, [])

    const renderItem = ({item, index}: { item: ArticleSimple, index: number }) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={onArticlePress(item)}
            >
                <ResizeImage uri={item.image}/>
                <Text style={styles.titleTxt}>{item.title}</Text>
                <View style={styles.nameLayout}>
                    <Image style={styles.avatarImg} source={{uri: item.avatarUrl}}/>
                    <Text style={styles.nameTxt}>{item.userName}</Text>
                    <Heart
                        value={item.isFavorite}
                        onValueChanged={(value: boolean) => {
                            console.log(value)
                        }}
                    />
                    <Text style={styles.countTxt}>{item.favoriteCount}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const Footer = () => {
        return (
            <Text style={styles.footerTxt}>没有更多数据</Text>
        )
    }

    const categoryList = store.categoryList.filter(i => (i as any).isAdd)
    return (
        <View style={styles.root}>
            <TitleBar
                tab={1}
                onTabChanged={(tab: number) => {
                    console.log(`tab=${tab}`)
                }}
            />
            <FlowList
                style={styles.flatList}
                data={store.homeList}
                keyExtrator={(item: ArticleSimple) => `${item.id}`}
                extraData={[store.refreshing]}
                contentContainerStyle={styles.container}
                renderItem={renderItem}
                numColumns={2}
                refreshing={store.refreshing}
                onRefresh={refreshNewData}
                onEndReachedThreshold={0.1}
                onEndReached={loadMoreData}
                ListFooterComponent={<Footer/>}
                ListHeaderComponent={
                    <CategoryList
                        categoryList={categoryList}
                        allCategoryList={store.categoryList}
                        onCategoryChange={(category: Category) => {
                            console.log(JSON.stringify(category))
                        }}
                    />
                }
            />
        </View>
    )
})

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0"
    },
    flatList: {
        width: "100%",
        height: "100%",
    },
    container: {
        // paddingTop: 6,
    },
    item: {
        width: SCREEN_WIDTH - 18 >> 1,
        backgroundColor: "white",
        marginLeft: 6,
        marginBottom: 6,
        borderRadius: 8,
        overflow: "hidden",
    },
    titleTxt: {
        fontSize: 14,
        color: "#333",
        marginHorizontal: 10,
        marginVertical: 4,
    },
    nameLayout: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    avatarImg: {
        width: 20,
        height: 20,
        resizeMode: "cover",
        borderRadius: 10,
    },
    nameTxt: {
        fontSize: 12,
        color: "#999",
        marginLeft: 6,
        flex: 1,
    },
    heart: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    countTxt: {
        fontSize: 14,
        color: "#999",
        marginLeft: 4,
    },
    footerTxt: {
        width: "100%",
        fontSize: 14,
        color: "#999",
        marginVertical: 16,
        textAlign: "center",
        textAlignVertical: "center",
    },
})
