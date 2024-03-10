import { useState, React } from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CButtonGroup,
  CFormSelect,
  CFormTextarea,
  CTable,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CFormCheck,
} from '@coreui/react'
import {
  cilTrash,
  cilCheckAlt,
  cilColorBorder,
  cilLibraryAdd,
  cilPeople,
  cilLink,
  cilMenu,
  cilHttps,
  cilUser,
  cilAsterisk,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function NewTeam() {
  const [repositoryType, setOptions] = useState([
    {
      key: 'Alpine Linux',
      value: 'alpine',
      isChecked: true,
    },
    {
      key: 'Bower',
      value: 'bower',
      isChecked: false,
    },
    {
      key: 'Cargo',
      value: 'cargo',
      isChecked: false,
    },
    {
      key: 'Chef',
      value: 'chef',
      isChecked: false,
    },
    {
      key: 'CocoaPods',
      value: 'cocoapods',
      isChecked: false,
    },
    {
      key: 'Conan',
      value: 'conan',
      isChecked: false,
    },
    {
      key: 'Conda',
      value: 'conda',
      isChecked: false,
    },
    {
      key: 'CRAN',
      value: 'cran',
      isChecked: false,
    },
    {
      key: 'Debian',
      value: 'debian',
      isChecked: false,
    },
    {
      key: 'Docker',
      value: 'docker',
      isChecked: true,
    },
    {
      key: 'Git LFS',
      value: 'git',
      isChecked: false,
    },
    {
      key: 'Go Registry',
      value: 'go',
      isChecked: false,
    },
    {
      key: 'Gradle',
      value: 'gradle',
      isChecked: false,
    },
    {
      key: 'Helm',
      value: 'helm',
      isChecked: true,
    },
    {
      key: 'Hugging Face',
      value: 'hugging',
      isChecked: false,
    },
    {
      key: 'Maven',
      value: 'maven',
      isChecked: false,
    },
    {
      key: 'npm',
      value: 'npm',
      isChecked: false,
    },
    {
      key: 'NuGet',
      value: 'nuget',
      isChecked: false,
    },
    {
      key: 'OCI',
      value: 'oci',
      isChecked: false,
    },
    {
      key: 'Opkg',
      value: 'opkg',
      isChecked: false,
    },
    {
      key: 'P2',
      value: 'p2',
      isChecked: false,
    },
    {
      key: 'PHP Composer',
      value: 'composer',
      isChecked: false,
    },
    {
      key: 'Pub Repositories',
      value: 'pub',
      isChecked: false,
    },
    {
      key: 'Puppet',
      value: 'puppet',
      isChecked: false,
    },
    {
      key: 'PyPI',
      value: 'pypi',
      isChecked: false,
    },
    {
      key: 'RPM',
      value: 'rpm',
      isChecked: false,
    },
    {
      key: 'RubyGems',
      value: 'rubygems',
      isChecked: false,
    },
    {
      key: 'SBT',
      value: 'sbt',
      isChecked: false,
    },
    {
      key: 'Swift',
      value: 'swift',
      isChecked: false,
    },
    {
      key: 'Terraform',
      value: 'terraform',
      isChecked: false,
    },
    {
      key: 'Vagrant',
      value: 'vagrant',
      isChecked: false,
    },
    {
      key: 'VCS',
      value: 'vcs',
      isChecked: false,
    },
  ])

  const [formFields, setFormFields] = useState([
    { repo_pref: '', repo_url: '', repo_type: [], repo_user: '', repo_password: '' },
  ])
  const [formStaticFields, setFormStaticFields] = useState({ team_name: '', team_note: '' })

  const handleNameChange = (e) => {
    let data = formStaticFields
    data[e.target.name] = e.target.value
    console.log(e.target.value)
    console.log(e.target.name)
    setFormStaticFields(data)
  }
  // const handleNoteChange = (e) => {
  //   this.setState({ password: e.target.value })
  // }
  const handleFormChange = (event, index) => {
    let data = [...formFields]
    data[index][event.target.name] = event.target.value
    setFormFields(data)
  }
  const handleChange = (e, index) => {
    let data = [...formFields]
    let value = Array.from(e.target.selectedOptions, (option) => option.value)
    data[index][e.target.name] = value
    setFormFields(data)
  }
  const submit = (e) => {
    e.preventDefault()
    let data_request = { remote: formFields, data: formStaticFields }
    // localStorage.setItem('data', JSON.stringify(formFields))
    localStorage.setItem('static', JSON.stringify(data_request))
    // const result = JSON.parse(localStorage.getItem('data'))
    const static_result = JSON.parse(localStorage.getItem('static'))
    // console.log(data_request)
    console.log(static_result)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(static_result),
    }
    fetch('http://localhost:8080/post', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data.code))
  }
  const addFields = () => {
    let object = { repo_pref: '', repo_url: '', repo_type: [], repo_user: '', repo_password: '' }
    setFormFields([...formFields, object])
  }
  const removeFields = (index) => {
    let data = [...formFields]
    data.splice(index, 1)
    setFormFields(data)
  }
  const handleSelectItem = (event, option, index) => {
    const values = [...repositoryType]
    values[index].isChecked = event.target.checked
    setOptions(values)
  }

  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Новая команда</strong>
          </CCardHeader>
          <p className="text-medium-emphasis">
            Процес по подготовке инфраструктуры для новой команды разработки.
          </p>
          <form onSubmit={submit}>
            <CTable>
              <CTableBody>
                <CTableRow>
                  <CInputGroup sm="auto">
                    <CInputGroupText id="basic-addon1">
                      <CIcon icon={cilPeople} className="me-2" />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Имя команды"
                      name="team_name"
                      aria-label="team_name"
                      aria-describedby="basic-addon1"
                      onChange={(event) => handleNameChange(event)}
                    />
                    <CInputGroup>
                      <CInputGroupText>
                        <CIcon icon={cilColorBorder} className="me-2" />
                      </CInputGroupText>
                      <CFormTextarea
                        aria-label="With textarea"
                        placeholder="Коментарий"
                        name="team_note"
                        onChange={(event) => handleNameChange(event)}
                      ></CFormTextarea>
                    </CInputGroup>
                  </CInputGroup>
                </CTableRow>
                <CTableRow>
                  <CInputGroup className="mb-12">
                    {repositoryType.map((role, index) => {
                      return (
                        <CFormCheck
                          className="me-4"
                          key={index}
                          id={role.value}
                          name={role.key}
                          value={role.value}
                          onChange={(event) => handleSelectItem(event, role, index)}
                          label={role.key}
                          checked={role.isChecked}
                        />
                      )
                    })}
                  </CInputGroup>
                </CTableRow>
                {formFields.map((form, index) => {
                  return (
                    // <div key={index}>
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">
                        <CInputGroup className="mb-12">
                          <CInputGroupText id="repo-pref">
                            <CIcon icon={cilAsterisk} className="me-2" />
                          </CInputGroupText>
                          <CFormInput
                            name="repo_pref"
                            placeholder="Префикс"
                            onChange={(event) => handleFormChange(event, index)}
                            value={form.repo_pref}
                          />
                          <CInputGroupText>
                            <CIcon icon={cilMenu} className="me-2" />
                          </CInputGroupText>
                          <CFormSelect
                            size="lg"
                            aria-label="Default select example"
                            name="repo_type"
                            placeholder="Выберите тип репозитория"
                            onChange={(event) => handleChange(event, index)}
                          >
                            <option>Выберите тип репозитория</option>
                            <option value="Maven">Maven</option>
                            <option value="Npm">Npm</option>
                            <option value="Go">Go</option>
                            <option value="PHP">PHP</option>
                            <option value="File">File</option>
                          </CFormSelect>
                          <CInputGroup className="mb-2">
                            <CInputGroupText id="repo-url">
                              <CIcon icon={cilLink} className="me-2" />
                            </CInputGroupText>
                            <CFormInput
                              name="repo_url"
                              placeholder="Ссылка на репозиторий"
                              onChange={(event) => handleFormChange(event, index)}
                              value={form.repo_url}
                            />
                          </CInputGroup>
                        </CInputGroup>
                        <CInputGroup className="mb-12">
                          <CInputGroupText id="repo-user">
                            <CIcon icon={cilUser} className="me-2" />
                          </CInputGroupText>
                          <CFormInput
                            name="repo_user"
                            placeholder="Имя пользователя"
                            onChange={(event) => handleFormChange(event, index)}
                            value={form.repo_user}
                          />
                          <CInputGroupText id="repo-password">
                            <CIcon icon={cilHttps} className="me-2" />
                          </CInputGroupText>
                          <CFormInput
                            name="repo_password"
                            placeholder="Пароль пользователя"
                            onChange={(event) => handleFormChange(event, index)}
                            value={form.repo_password}
                            type="password"
                          />
                        </CInputGroup>
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="row">
                        <CButton
                          className="me-2"
                          shape="rounded-pill"
                          color="danger"
                          onClick={() => removeFields(index)}
                        >
                          <CIcon icon={cilTrash} className="me-2" />
                          Удалить
                        </CButton>
                      </CTableHeaderCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </form>
          <p></p>
          <CButtonGroup role="group" aria-label="Basic example">
            <CButton className="me-2" color="info" onClick={addFields}>
              <CIcon icon={cilLibraryAdd} className="me-2" />
              Добавить..
            </CButton>
            <CButton className="me-2" color="warning" onClick={submit}>
              <CIcon icon={cilCheckAlt} className="me-2" />
              Создать запрос
            </CButton>
          </CButtonGroup>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default NewTeam
