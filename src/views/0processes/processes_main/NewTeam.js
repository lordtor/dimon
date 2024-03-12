import React, { useState } from 'react'
import {
  CCard,
  CCardHeader,
  CRow,
  CButton,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CButtonGroup,
  CFormSelect,
  CFormTextarea,
  CFormCheck,
  CContainer,
  CForm,
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

  const submit = async (e) => {
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
    const currentHost = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`
    console.log(currentHost)
    // render() {
    //   return (
    //     { this.state.loading ? <div><CSpinner /></div> : <div>{this.state.data.item.title}</div> }
    //   )
    try {
      const response = await fetch(
        `${window.location.protocol}//${window.location.hostname}:8080/post`,
        requestOptions,
      )
      const json = await response.json()
      // this.setState({ data: json })
      console.log(json)
    } catch (error) {
      console.log(error)
    }
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
    <CContainer>
      <CCard className="mb-4">
        <CCardHeader className="mb-4">
          <strong>Новая команда</strong>
        </CCardHeader>
        <p className="text-medium-emphasis">
          Процес по подготовке инфраструктуры для новой команды разработки.
        </p>
      </CCard>
      <CForm className="row gy-2 gx-3 align-items-center" onSubmit={submit}>
        <CInputGroup>
          <CInputGroup>
            <CInputGroupText id="basic-addon1">
              <CIcon icon={cilPeople} className="me-1" />
            </CInputGroupText>
            <CFormInput
              placeholder="Имя команды"
              name="team_name"
              aria-label="team_name"
              aria-describedby="basic-addon1"
              onChange={(event) => handleNameChange(event)}
            />
          </CInputGroup>
          <CRow>
            <p>Внутренние репозитории:</p>
          </CRow>
          <CRow>
            <CInputGroup>
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
          </CRow>
          <CRow>
            <br />
            <p>Вешние репозитории (*возможно потребуется ожидать получения сетевого доступа)</p>
            <br />
          </CRow>
          {formFields.map((form, index) => {
            return (
              <CInputGroup key={index}>
                <CRow>
                  <CInputGroup>
                    <CInputGroupText>
                      <CIcon icon={cilMenu} />
                    </CInputGroupText>
                    <CFormSelect
                      aria-label="Default select example"
                      name="repo_type"
                      placeholder="Выберите тип репозитория"
                      onChange={(event) => handleChange(event, index)}
                    >
                      <option>Выберите тип репозитория</option>
                      {repositoryType.map((role, index) => {
                        return (
                          <option value={role.value} key={index}>
                            {role.key}
                          </option>
                        )
                      })}
                    </CFormSelect>
                    <CInputGroupText id="repo-pref">
                      <CIcon icon={cilAsterisk} />
                    </CInputGroupText>
                    <CFormInput
                      name="repo_pref"
                      placeholder="Префикс"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.repo_pref}
                    />
                    <CInputGroupText id="repo-url">
                      <CIcon icon={cilLink} />
                    </CInputGroupText>
                    <CFormInput
                      name="repo_url"
                      placeholder="Ссылка на репозиторий"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.repo_url}
                    />
                    <CInputGroupText id="repo-user">
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      name="repo_user"
                      placeholder="Имя пользователя"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.repo_user}
                    />
                    <CInputGroupText id="repo-password">
                      <CIcon icon={cilHttps} />
                    </CInputGroupText>
                    <CFormInput
                      name="repo_password"
                      placeholder="Пароль пользователя"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.repo_password}
                      type="password"
                    />
                  </CInputGroup>
                </CRow>
                <CRow>
                  <CButtonGroup>
                    <CButton sm="1" color="danger" onClick={() => removeFields(index)}>
                      <CIcon icon={cilTrash} />
                      Удалить
                    </CButton>
                    <CButton sm="1" color="info" onClick={addFields}>
                      <CIcon icon={cilLibraryAdd} className="me-2" />
                      Добавить репозиторий..
                    </CButton>
                  </CButtonGroup>
                </CRow>
              </CInputGroup>
            )
          })}
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
      </CForm>
      <CButtonGroup role="group" aria-label="Basic example">
        <CButton className="me-2" color="warning" onClick={submit}>
          <CIcon icon={cilCheckAlt} className="me-2" />
          Создать запрос
        </CButton>
      </CButtonGroup>
    </CContainer>
  )
}

export default NewTeam
