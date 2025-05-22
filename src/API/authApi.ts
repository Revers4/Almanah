import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/"}),
    endpoints: build => ({
        login: build.mutation({
            query: body => ({
                url: "login",
                method: "POST",
                body
            })
        }),
        register: build.mutation({
            query: body => ({
                url: "register",
                method: "POST",
                body
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation } = authApi