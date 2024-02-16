import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:8080/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
    }),
    createTodo: builder.mutation({
      query: (newTodo) => ({
        url: "todos",
        method: "POST",
        body: newTodo,
      }),
    }),
    updateTodo: builder.mutation({
      query: ({ id, changes }) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: changes,
      }),
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
    }),
    completedTodo: builder.mutation({
      query: ({ id }) => ({
        url: `todos/${id}/completed`,
        method: "PUT",
      }),
    }),
  }),
});
