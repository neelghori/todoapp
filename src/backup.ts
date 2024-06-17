//   <DragDropContext onDragEnd={() => {}}>
//       <div className="w-full h-screen flex justify-center items-center relative">
//         <div className="absolute top-0 left-0 w-full h-96 -z-50 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md  filter blur-3xl opacity-50" />
//         <div className="w-full flex gap-2 items-center px-20 py-3 absolute top-0 left-0">
//           <img src={"/logo.png"} alt="logo" className="w-24  h-24" />
//           <p className="text-3xl font-extrabold">Todo App</p>
//         </div>

//         <div className="grid grid-cols-3 gap-5 h-[600px] mt-28 z-10">
//           {["Todo", "In Progress", "Completed"].map((element, key) => {
//             return (
//               <div className="card" key={key}>
//                 <div className="flex flex-col gap-2 bg-[#f0efed] p-3 rounded-[10px] overflow-hidden">
//                   <div className="flex flex-col gap-2">
//                     <h3 className="mt-4">
//                       {element}{" "}
//                       <span className="py-1 px-2 ml-1 text-xs bg-[#d2d3db] rounded-full">
//                         3
//                       </span>
//                     </h3>
//                     <div className="border border-dashed p-[7px] cursor-pointer border-[#d2d3db] flex justify-center items-center">
//                       <AddIcon />
//                     </div>
//                   </div>
//                   <Droppable droppableId={element}>
//                     {(droppableProvided) => {
//                       return (
//                         <div
//                           className="flex flex-col gap-5 mt-2 overflow-y-scroll pr-2"
//                           {...droppableProvided.droppableProps}
//                           ref={droppableProvided.innerRef}
//                         >
//                           {["Todo", "In Progress", "Completed"].map(
//                             (element, index) => {
//                               return (
//                                 <Draggable
//                                   key={element}
//                                   draggableId={`${element}`}
//                                   index={index}
//                                 >
//                                   {(draggableProvided) => {
//                                     return (
//                                       <div
//                                         {...draggableProvided.dragHandleProps}
//                                         {...draggableProvided.draggableProps}
//                                         ref={draggableProvided.innerRef}
//                                       >
//                                         <p>hello world {index}</p>
//                                       </div>
//                                     );
//                                   }}
//                                 </Draggable>
//                               );
//                             }
//                           )}
//                           {droppableProvided.placeholder}
//                         </div>
//                       );
//                     }}
//                   </Droppable>

//                   {/* <div className="flex flex-col gap-5 mt-2 overflow-y-scroll pr-2">
//                     {[1, 2, 3, 4, 5].map((ele, index) => {
//                       return (
//                         <div className="bg-white p-[14px] flex cursor-pointer flex-col gap-4 group rounded-md w-[320px]">
//                           <div className="flex justify-between">
//                             <div className="flex flex-col gap-1">
//                               <p>Create Grocery Todoaksdhasdha akjsadkshd</p>
//                               <p className="text-xs">7 Aug</p>
//                             </div>
//                             <Ellipsis className="size-5 cursor-pointer group-hover:flex hidden transition-all duration-1000 ease-in-out" />
//                           </div>
//                           <div>
//                             <img
//                               src={
//                                 "https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                               }
//                               alt=""
//                               width={100}
//                               height={100}
//                               className="w-full h-36 object-cover"
//                             />
//                           </div>
//                           <div className="flex gap-3 justify-between">
//                             <div>
//                               <div className="flex -space-x-1 overflow-hidden">
//                                 <img
//                                   className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
//                                   src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                                   alt=""
//                                 />
//                                 <img
//                                   className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
//                                   src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                                   alt=""
//                                 />
//                                 <img
//                                   className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
//                                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
//                                   alt=""
//                                 />
//                                 <img
//                                   className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
//                                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                                   alt=""
//                                 />
//                               </div>
//                             </div>
//                             <div className="flex gap-3">
//                               <div className="flex items-center gap-1">
//                                 <Message />
//                                 <p className="text-xs">0</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div> */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </DragDropContext>
