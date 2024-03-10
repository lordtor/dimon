package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
    "fmt"
    "io"

)

func main() {
	r := gin.Default()
    r.Use(func(c *gin.Context) {
    c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
    c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
    c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
    c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

    if c.Request.Method == "OPTIONS" {
        c.AbortWithStatus(204)
        return
    }

    c.Next()
})
	r.POST("/post", func(c *gin.Context) {
        jsonData, err := io.ReadAll(c.Request.Body)
        if err != nil {
            fmt.Println(err)
        }
        
        fmt.Println(string(jsonData))
        c.JSON(http.StatusOK, gin.H{ 
            "code" : http.StatusOK, 
            "id": string(jsonData),// cast it to string before showing
})

	})

	r.Run()
}