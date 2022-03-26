import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Index";
import { BtnSpan, Buttons } from "../ButtonElements";
import { Data } from "../../Data";
import AllProjectsCard from "./AllProjectsCard";
import { Paginate } from "../common/Paginate";
import Pagination from "../common/Pagination";
import SearchBox from "../common/SearchBox";
import Select from "../common/Select";

export default class AllProjects extends Component {
  state = {
    projects: [],
    genres: [],
    pageSize: 6,
    currentPage: 1,
    selectedGenre: null,
    searchQuery: "",
  };

  componentDidMount() {
    const { genres } = Data;
    const data = [{ _id: "", name: "All Projects" }, ...genres];
    const { projects } = Data;
    this.setState({ projects, genres: data });
  }

  handlepageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleQuery = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSelection = ({ currentTarget: input }) => {
    const genres = this.state.genres;
    const genre = genres.find((genre) => genre._id === input.value);
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });

    console.log(genre);
  };

  getData() {
    const {
      projects: allProjects,
      selectedGenre,
      currentPage,
      pageSize,
      searchQuery,
    } = this.state;
    let filtered = allProjects;
    if (searchQuery)
      filtered = allProjects.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    if (selectedGenre && selectedGenre._id)
      filtered = allProjects.filter((m) => m.genre._id === selectedGenre._id);

    const projects = Paginate(filtered, currentPage, pageSize);

    const { length: count } = filtered;

    return { count, projects };
  }

  render() {
    const { genres, currentPage, pageSize, searchQuery } = this.state;
    const { projects, count } = this.getData();
    const Button = Buttons(Link);
    return (
      <div className="project-container">
        <div className="projects_bar">
          <Button dark="true" primary="true" to="/" className=" btn-sm m-3">
            <BtnSpan>Home</BtnSpan>
          </Button>
          <Select options={genres} onChange={this.handleSelection} />
        </div>
        <div className="projects-wrapper">
          <div>
            <div className="projects-content">
              <SearchBox value={searchQuery} onChange={this.handleQuery} />
              <div className="project-item">
                {projects.map((project) => (
                  <AllProjectsCard key={project._id} {...project} />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={this.handlepageChange}
                pageItems={count}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
