import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CCardImage,
  CCardTitle,
  CCardText,
} from '@coreui/react'
import NewTeamImg from 'src/assets/images/new_team.jpg'
import NewEnvImg from 'src/assets/images/new_env.jpg'
function Processes() {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Процессы</strong>
          </CCardHeader>
          <CCardBody>
            <CRow sm="auto">
              <CCol>
                <CCard sm="auto">
                  <CCardImage orientation="top" src={NewTeamImg} />
                  <CCardBody>
                    <CCardTitle>Новая команда</CCardTitle>
                    <CCardText>
                      Процес по подготовке инфраструктуры для новой команды разработки.
                    </CCardText>
                    <CButton href="#/processes/new_team">Перейти к процессу</CButton>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol>
                <CCard sm="auto">
                  <CCardImage orientation="top" src={NewEnvImg} />
                  <CCardBody>
                    <CCardTitle>Новое окружение</CCardTitle>
                    <CCardText>
                      Процес по подготовке инфраструктуры нового окружения. Добовляет к имеющимся
                      еще едно.
                    </CCardText>
                    <CButton href="#/buttons/buttons">Перейти к процессу</CButton>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol>
                <CCard sm="auto">
                  <CCardImage orientation="top" src={NewEnvImg} />
                  <CCardBody>
                    <CCardTitle>Постоновка на конвейер</CCardTitle>
                    <CCardText>
                      Процес по подготовке инфраструктуры нового окружения. Добовляет к имеющимся
                      еще едно.
                    </CCardText>
                    <CButton href="#/buttons/buttons">Перейти к процессу</CButton>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Processes
