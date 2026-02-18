package com.example.backend.Model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "complaints")
public class Complaint{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String description;
    private String category;
    private String complaintStatus;
    private int priority = 1;
    private String adminComment;
    private LocalDate complaintDate;
    private LocalDate resolveDate;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private User user;

    @Lob
    private byte[] image;

    public Complaint() {}

    public Complaint(int id, String title, String description, String category, String complaintStatus, int priority, String adminComment, LocalDate complaintDate, LocalDate resolveDate, User student, byte[] image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.complaintStatus = complaintStatus;
        this.priority = priority;
        this.adminComment = adminComment;
        this.complaintDate = complaintDate;
        this.resolveDate = resolveDate;
        this.user = student;
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getComplaintStatus() {
        return complaintStatus;
    }

    public void setComplaintStatus(String complaintStatus) {
        this.complaintStatus = complaintStatus;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public String getAdminComment() {
        return adminComment;
    }

    public void setAdminComment(String adminComment) {
        this.adminComment = adminComment;
    }

    public LocalDate getComplaintDate() {
        return complaintDate;
    }

    public void setComplaintDate(LocalDate complaintDate) {
        this.complaintDate = complaintDate;
    }

    public LocalDate getResolveDate() {
        return resolveDate;
    }

    public void setResolveDate(LocalDate resolveDate) {
        this.resolveDate = resolveDate;
    }

    public User getStudent() {
        return user;
    }

    public void setStudent(User student) {
        this.user = student;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}
