import { InMemoryCache, makeVar } from '@apollo/client'

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isSideBarOpen(){
          return isSideBarOpenVar();
        },
        isLogin() {
          return isLoggedInVar();
        },
        isRegistered(){
          return isRegisteredVar();
        },
        deviceSize(){
          return deviceSizeVar();
        },
        dashboardColumnIssues() {
          return dashboardColumnIssuesVar();
        },
        myEmail() {
          return myEmailVar();
        },
      }
    }
  },
})

export const isSideBarOpenVar = makeVar(false)
export const isLoggedInVar = makeVar(!!localStorage.getItem('token'))
export const isRegisteredVar =  makeVar(false)
export const deviceSizeVar = makeVar('')
export const dashboardColumnIssuesVar = makeVar([])
export const myEmailVar = makeVar('')