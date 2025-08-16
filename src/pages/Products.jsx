import React, { useEffect, useState } from 'react'
import { getData } from '../context/DataContext'
import FilterSection from '../components/FilterSection'
import Loading from "../assets/Loading4.webm"
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
import Lottie from 'lottie-react'
import notfound from "../assets/notfound.json"
import MobileFilter from '../components/MobileFilter'

const Products = () => {
  const { data, fetchAllProducts } = getData()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [page, setPage] = useState(1)
  const [openFilter, setOpenFilter] = useState(false)

  useEffect(() => {
    fetchAllProducts()
    window.scrollTo(0, 0)
  }, [])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    setPage(1)
    setOpenFilter(false)
  }

  const handleBrandChange = (e) => {
    setBrand(e.target.value)
    setPage(1)
    setOpenFilter(false)
  }

  const pageHandler = (selectedPage) => {
    setPage(selectedPage)
    window.scrollTo(0, 0)
  }

  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || item.category === category) &&
    (brand === "All" || item.brand === brand) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]
  )

  const dynamicPage = Math.ceil(filteredData?.length / 8)

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header + Mobile Filter */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Explore Our Products 🛍️
          </h1>
          <button
            onClick={() => setOpenFilter(true)}
            className="md:hidden px-4 py-2 text-sm bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            Filters
          </button>
        </div>

        {/* Mobile Filter Drawer */}
        <MobileFilter
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          search={search}
          setSearch={setSearch}
          brand={brand}
          setBrand={setBrand}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          category={category}
          setCategory={setCategory}
          handleCategoryChange={handleCategoryChange}
          handleBrandChange={handleBrandChange}
        />

        {data?.length > 0 ? (
          <div className="flex gap-8">
            {/* Sidebar Filter (Desktop) */}
            <aside className="hidden md:block w-1/4">
              <FilterSection
                search={search}
                setSearch={setSearch}
                brand={brand}
                setBrand={setBrand}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                category={category}
                setCategory={setCategory}
                handleCategoryChange={handleCategoryChange}
                handleBrandChange={handleBrandChange}
              />
            </aside>

            {/* Products Section */}
            <main className="flex-1">
              {filteredData?.length > 0 ? (
                <div className="flex flex-col items-center">
                  {/* Product Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                    {filteredData
                      ?.slice(page * 8 - 8, page * 8)
                      .map((product, index) => (
                        <ProductCard key={index} product={product} />
                      ))}
                  </div>

                  {/* Pagination */}
                  <div className="mt-10">
                    <Pagination
                      pageHandler={pageHandler}
                      page={page}
                      dynamicPage={dynamicPage}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center mt-20">
                  <Lottie animationData={notfound} className="w-80" />
                  <p className="mt-4 text-lg font-semibold text-gray-600">
                    No products found. Try adjusting your filters.
                  </p>
                </div>
              )}
            </main>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop className="w-32">
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
