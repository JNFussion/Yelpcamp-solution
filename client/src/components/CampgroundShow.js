import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatDistanceToNow, parseISO } from "date-fns";
import Navbar from "./Navbar";
import map from "../Assets/Map.png";
import CommentIcon from "../Assets/Chat Bubble.svg";

function CampgroundShow() {
  const { id } = useParams();
  const [camp, setCamp] = useState();
  useEffect(() => {
    fetch(`/campground/${id}`).then((res) => {
      res.json().then((data) => {
        setCamp(data);
      });
    });
    return () => {};
  }, []);

  if (camp) {
    console.log(camp.comments);
    return (
      <>
        <Navbar />
        <article className="max-w-[1440px] mx-auto">
          <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row gap-6">
            <div className="">
              <section className="w-fit mx-auto p-10 border rounded shadow">
                <div>
                  <img src={map} alt="map" />
                </div>
              </section>
            </div>

            <section className="flex-1 md:px-20 py-10 border rounded shadow">
              <div className="">
                <img src={camp.image} alt="camp" className="w-full" />
              </div>
              <header>
                <div className="my-4 flex justify-between">
                  <h2 className="font-bold text-xl">{camp.name}</h2>
                  <p>$ {camp.price}/night</p>
                </div>
                <p className="text-gray-700">{camp.description}</p>
                <p className="my-4 text-gray-700">Submitted by {camp.author}</p>
              </header>
            </section>
          </div>
          <section className="max-w-7xl mx-auto my-10 px-4">
            <div className="py-10 border rounded shadow">
              <div className="max-w-3xl mx-auto">
                {camp.comments.map((c) => (
                  <article className="border-b-[1px] ">
                    <header className="my-4 flex justify-between">
                      <h3 className="font-bold text-lg">{c.author}</h3>
                      <div>
                        {formatDistanceToNow(parseISO(c.create_at), {
                          addSuffix: true,
                        })}
                      </div>
                    </header>
                    <p className="py-4 text-gray-700">{c.description}</p>
                  </article>
                ))}
              </div>
              <div>
                <Link
                  to={`/campground/${id}/comment/new`}
                  className="w-fit ml-auto mr-5 my-4 p-4 flex items-center rounded text-white font-bold bg-black"
                >
                  <span>
                    <img src={CommentIcon} alt="comment icon" />
                  </span>
                  <span>Leave a review</span>
                </Link>
              </div>
            </div>
          </section>
        </article>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <article className="grid place-content-center">
        <p className="text-4xl">Loading...</p>
      </article>
    </>
  );
}

export default CampgroundShow;
