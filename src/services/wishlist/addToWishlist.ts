// // src/services/wishlist/addToWishlist.ts
// export const addToWishlist = async (productId: string) => {
//   const token = localStorage.getItem("token");
//   if (!token) throw new Error("No token found");

//   const resp = await fetch(`${process.env.NEXT_PUBLIC_API}wishlist`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ productId }),
//   });

//   if (!resp.ok) {
//     const text = await resp.text();
//     throw new Error(`Failed to add to wishlist: ${text}`);
//   }

//   return resp.json();
// };
