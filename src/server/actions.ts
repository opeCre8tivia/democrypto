"use server"

import prisma from "@/lib/prisma"

import { revalidatePath } from "next/cache"

interface CreateCurrencyType {
  name: string
  code: string
  symbol: string
  countryId: string
}
interface CreateDenominationType {
  name: string
  value: number
  type: any
  currencyId: string
}
interface CreateCountryType {
  name: string
  code: string
  flag: string
}

interface CreateRoleType {
  name: string
}
interface CreatePermissionType {
  name: string
  code: number
}

interface CreateBusinessCategoryType {
  name:string
  theme:string
  iconUri:string
}

// fetch 4 most popular crypto currencies
export const getCrypto = async(limit:number)=>{
   try {

    const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=USD`,{
      method:"GET",
      headers:{
        "X-CMC_PRO_API_KEY":`${process.env.MARKET_CAP_KEY}`,
        "Content-Type":"application/json"
      },
      next:{
        revalidate:5000
      }
    })
  
    return response.json()
    
   } catch (error) {
     console.log(error)
   }

}

export const handleCreateCurrency = async (formData: CreateCurrencyType) => {
  try {
    const result = await prisma.currency.create({
      data: {
        name: formData.name,
        code: formData.code,
        symbol: formData.symbol,
        countryId:formData.countryId,
      },
    })

    revalidatePath("/admin/currencies")
  } catch (error) {
    console.log(error, "----->err")
  }
}
export const handleCreateDenomination = async (
  formData: CreateDenominationType
) => {
  try {
    const result = await prisma.denomination.create({
      data: {
        name: formData.name,
        value: formData.value,
        type: formData.type,
        currencyId: formData.currencyId,
      },
    })

    revalidatePath("/admin/denominations")
  } catch (error) {
    console.log(error, "----->err")
  }
}

export const handleCreateCountry = async (formData: CreateCountryType) => {
  try {
    const result = await prisma.country.create({
      data: {
        name: formData.name,
        code: formData.code,
        flag: formData.flag,

      },
    })

    revalidatePath("/admin/countries")
  } catch (error) {
    console.log(error)
  }
}


export const handleCreateRole = async (formData: CreateRoleType) => {
  try {
   

    revalidatePath("/admin/roles")
  } catch (error) {
    console.log(error)
  }
}


export const handleCreatePermission = async (formData: CreatePermissionType) => {
  try {
    const result = await prisma.permission.create({
      data: {
        name: formData.name,
        code:formData.code
      },
    })

    revalidatePath("/admin/permissions")
  } catch (error) {
    console.log(error)
  }
}


export const handleCreateBusinessCategory = async (formData: CreateBusinessCategoryType) => {
  try {
    const result = await prisma.businessCategory.create({
      data: {
        name: formData.name,
        themeColor:formData.theme,
        iconUri:formData.iconUri,
      
      },
    })

    revalidatePath("/admin/businesscategories")
  } catch (error) {
    console.log(error)
  }
}
