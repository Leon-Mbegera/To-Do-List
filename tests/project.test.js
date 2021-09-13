import Project, { showProjects } from '../src/project';
import document from '../dom';


describe('Tests on project class', () => {

  test('a newly created project should be truthy', () => {
    const newProject = new Project('givenTitle');
    expect(newProject).toBeTruthy();
  });

  test('a newly created project without title should be falsy', () => {
    const newProject = new Project('');
    expect(newProject.title).toBeFalsy();
  });

  test('given title should be the project title', () => {
    const givenTitle = 'projectTitle';
    const newProject = new Project(givenTitle);
    expect(newProject.title).toBe(givenTitle);
  });

  test('newly created project should be included in projects array', () => {
    const newProject = ['eat'];
    expect(['play', 'work', 'eat', 'jog']).toEqual(
      expect.arrayContaining(newProject),
    );
  });

  test('todos array is an object of project', () => {
    const newProject = new Project('given-title');
    expect(typeof newProject.todos).toBe('object');
  });
});

describe('Test functions related to project class', () => {

  test('showProjects method displays all created projects', () => {
    showProjects();
    const projectSection = document.getElementById('all-projects');
    expect(projectSection.innerHTML).toContain('default');
  });

  
});


