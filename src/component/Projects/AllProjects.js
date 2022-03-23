import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Data } from "../../Data";
import AllProjectsCard from "./AllProjectsCard";
import { Paginate } from "../common/Paginate";
import Pagination from "../common/Pagination";
import SearchBox from "../common/SearchBox";
import ListGroup from "../common/ListGroup";
import { ProjectContainer } from "./ProjectsElements";
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
    const data = [{ _id: "", name: "All Genres" }, ...genres];
    const { projects } = Data;
    this.setState({ projects, genres: data });
  }

  handlepageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSelection = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleQuery = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
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
    const { genres, selectedGenre, currentPage, pageSize, searchQuery } =
      this.state;
    const { projects, count } = this.getData();
    return (
      <ProjectContainer className="row">
        <div className="col-3 m-3">
          <ListGroup
            genres={genres}
            selectedItem={selectedGenre}
            onSelect={this.handleSelection}
          />
        </div>
        <div className="col">
          <Link to="/" className="btn btn-warning btn-sm m-3">
            Home
          </Link>

          <SearchBox value={searchQuery} onChange={this.handleQuery} />

          <div className="projects">
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
      </ProjectContainer>
    );
  }
}
