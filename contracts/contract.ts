import { ethers } from "ethers";
import { ContractContext as ContractContextArticleToken } from './types/articletoken-abi'
import { ContractContext as ContractContextManftestoToken } from './types/manftestotoken-abi'
import articletokenAbi from './types/articletoken-abi.json'
import manftestotokenAbi from './types/manftestotoken-abi.json'

// export const articletokenAddress = '0x09D0C7EBc669264f2d5D04E47678e5e20420dc77' // Goerli
// export const manftestotokenAddress = '0x6b5A7Dc0B9e780BcF9864e8289b157bd3A72eE9A' // Goerli
// export const droptokenAddress = '0x43652034141a0cc06c125f9BEdfD0f7b4688A06E' // Goerli

// Harmony Testnet
export const articletokenAddress = '0x0901f30568d21dDb7b3aC387B02aF6E355e03335' //xDAI / Gnosis Chain
export const manftestotokenAddress = '0x1480fce49A17eA5Ed6E5e6f777ed3e9dbD8d3b89' // xDAI / Gnosis Chain



export const getContract = (injectedProvider: any) => {
    const provider = new ethers.providers.Web3Provider(injectedProvider as any)
    return {
        articletokenContract: new ethers.Contract(articletokenAddress, articletokenAbi, provider.getSigner()) as unknown as ContractContextArticleToken,
        manftestotokenContract: new ethers.Contract(manftestotokenAddress, manftestotokenAbi, provider.getSigner()) as unknown as ContractContextManftestoToken,
    }
}

