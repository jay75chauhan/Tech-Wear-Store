import Head from "next/head";
import { useEffect, useState } from "react";
import * as Realm from "realm-web";
import Category from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Pagination from "../../components/Pagination";
import Products from "../../components/Products";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
    const app = new Realm.App({ id: REALM_APP_ID });

    const credentials = Realm.Credentials.anonymous();

    try {
      const user = await app.logIn(credentials);
      const allProducts = await user.functions.getAlllProducts();
      setProducts(allProducts);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Tech Wear Store</title>
        <link
          rel="icon"
          href="https://image.flaticon.com/icons/png/512/2917/2917995.png"
        />
      </Head>
      <div className="bg-white w-full min-h-screen">
        <Header />
        <Container>
          <Category
            category="All Products"
            categoryCount={`${products.length} Products`}
          />
          <Products products={products} />
          <Pagination />
        </Container>
        <Footer />
      </div>
    </div>
  );
}
