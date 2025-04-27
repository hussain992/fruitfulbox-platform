import ProductDetailPage from "../../products/[slug]/page"

const BoxPage = () => {
    const params = Promise.resolve({ slug: "delight-box" }); // Transform to expected format
    
    return (
        <ProductDetailPage params={params} />
    )
}

export default BoxPage;