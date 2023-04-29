import MainHead from '@/components/MainHead'
import Hero from '@/components/OpreationsManual/Hero'
import TextSection from '@/components/OpreationsManual/TextSection'
import React, { useEffect, useState } from 'react'

const OperationsManual = () => {
  const [authunticate, setAuthunticate] = useState(false)
  const [passcode, setPasscode] = useState("")
  useEffect(() => {
    if (localStorage.getItem("n") === '022023' || passcode === '022023') {
      setAuthunticate(true)
    }
    else {
      setAuthunticate(false)
    }
  }, [])
  const handleSubmit = () => {
    if (passcode === '022023') {
      localStorage.setItem("n", "022023")
      setAuthunticate(true)
    }

  }
  const handleChange = (e) => {
    setPasscode(e.target.value)
  }
  return (
    <div>
      <MainHead
        metaTitle="Cleaning franchise operations manual."
        metaKeywords="Put Keywords here for OperationsManual page"
        metaDesc="Put description here for OperationsManual page"
      />
      {
        !authunticate ? <div className='absolute top-0 w-full h-full z-40  bg-[#1d1d2b] '>
          <div class="w-full m-auto mt-[10%] max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Please Enter Passowrd
                </label>
                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value={passcode} onChange={handleChange} />
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div> :
          <>
            <Hero />
            <TextSection />
          </>
      }

    </div >
  )
}

export default OperationsManual